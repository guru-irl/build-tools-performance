import React from 'react';
const LABEL_16651 = 'component_16651';
export function Component16651({ value = 16651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16651, 'data-value': derived.doubled }, children);
}
export default Component16651;
