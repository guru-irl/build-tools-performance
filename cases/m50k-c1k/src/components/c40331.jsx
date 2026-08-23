import React from 'react';
const LABEL_40331 = 'component_40331';
export function Component40331({ value = 40331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40331, 'data-value': derived.doubled }, children);
}
export default Component40331;
