import React from 'react';
const LABEL_33782 = 'component_33782';
export function Component33782({ value = 33782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33782, 'data-value': derived.doubled }, children);
}
export default Component33782;
