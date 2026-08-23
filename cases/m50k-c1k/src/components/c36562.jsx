import React from 'react';
const LABEL_36562 = 'component_36562';
export function Component36562({ value = 36562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36562, 'data-value': derived.doubled }, children);
}
export default Component36562;
