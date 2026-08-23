import React from 'react';
const LABEL_35162 = 'component_35162';
export function Component35162({ value = 35162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35162, 'data-value': derived.doubled }, children);
}
export default Component35162;
