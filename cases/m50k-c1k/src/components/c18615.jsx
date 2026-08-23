import React from 'react';
const LABEL_18615 = 'component_18615';
export function Component18615({ value = 18615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18615, 'data-value': derived.doubled }, children);
}
export default Component18615;
