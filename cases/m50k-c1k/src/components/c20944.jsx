import React from 'react';
const LABEL_20944 = 'component_20944';
export function Component20944({ value = 20944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20944, 'data-value': derived.doubled }, children);
}
export default Component20944;
