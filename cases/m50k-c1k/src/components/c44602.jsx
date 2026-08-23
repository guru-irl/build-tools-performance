import React from 'react';
const LABEL_44602 = 'component_44602';
export function Component44602({ value = 44602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44602, 'data-value': derived.doubled }, children);
}
export default Component44602;
