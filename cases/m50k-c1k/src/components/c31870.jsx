import React from 'react';
const LABEL_31870 = 'component_31870';
export function Component31870({ value = 31870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31870, 'data-value': derived.doubled }, children);
}
export default Component31870;
