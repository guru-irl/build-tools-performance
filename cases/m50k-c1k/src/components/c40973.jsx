import React from 'react';
const LABEL_40973 = 'component_40973';
export function Component40973({ value = 40973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40973, 'data-value': derived.doubled }, children);
}
export default Component40973;
