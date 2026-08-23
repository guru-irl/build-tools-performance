import React from 'react';
const LABEL_26138 = 'component_26138';
export function Component26138({ value = 26138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26138, 'data-value': derived.doubled }, children);
}
export default Component26138;
