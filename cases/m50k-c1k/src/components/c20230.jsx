import React from 'react';
const LABEL_20230 = 'component_20230';
export function Component20230({ value = 20230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20230, 'data-value': derived.doubled }, children);
}
export default Component20230;
