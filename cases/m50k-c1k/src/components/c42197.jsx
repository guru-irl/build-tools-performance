import React from 'react';
const LABEL_42197 = 'component_42197';
export function Component42197({ value = 42197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42197, 'data-value': derived.doubled }, children);
}
export default Component42197;
