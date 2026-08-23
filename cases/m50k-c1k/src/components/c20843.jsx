import React from 'react';
const LABEL_20843 = 'component_20843';
export function Component20843({ value = 20843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20843, 'data-value': derived.doubled }, children);
}
export default Component20843;
