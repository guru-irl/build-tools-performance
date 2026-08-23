import React from 'react';
const LABEL_35903 = 'component_35903';
export function Component35903({ value = 35903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35903, 'data-value': derived.doubled }, children);
}
export default Component35903;
