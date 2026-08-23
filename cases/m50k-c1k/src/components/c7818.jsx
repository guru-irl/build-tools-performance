import React from 'react';
const LABEL_7818 = 'component_7818';
export function Component7818({ value = 7818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7818, 'data-value': derived.doubled }, children);
}
export default Component7818;
