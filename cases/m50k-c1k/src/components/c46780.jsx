import React from 'react';
const LABEL_46780 = 'component_46780';
export function Component46780({ value = 46780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46780, 'data-value': derived.doubled }, children);
}
export default Component46780;
