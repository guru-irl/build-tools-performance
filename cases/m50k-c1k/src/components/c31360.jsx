import React from 'react';
const LABEL_31360 = 'component_31360';
export function Component31360({ value = 31360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31360, 'data-value': derived.doubled }, children);
}
export default Component31360;
