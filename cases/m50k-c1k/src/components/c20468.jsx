import React from 'react';
const LABEL_20468 = 'component_20468';
export function Component20468({ value = 20468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20468, 'data-value': derived.doubled }, children);
}
export default Component20468;
