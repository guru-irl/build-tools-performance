import React from 'react';
const LABEL_24818 = 'component_24818';
export function Component24818({ value = 24818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24818, 'data-value': derived.doubled }, children);
}
export default Component24818;
