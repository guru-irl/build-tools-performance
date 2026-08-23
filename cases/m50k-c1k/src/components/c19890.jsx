import React from 'react';
const LABEL_19890 = 'component_19890';
export function Component19890({ value = 19890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19890, 'data-value': derived.doubled }, children);
}
export default Component19890;
