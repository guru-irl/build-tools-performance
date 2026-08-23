import React from 'react';
const LABEL_35563 = 'component_35563';
export function Component35563({ value = 35563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35563, 'data-value': derived.doubled }, children);
}
export default Component35563;
