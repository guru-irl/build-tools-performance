import React from 'react';
const LABEL_29370 = 'component_29370';
export function Component29370({ value = 29370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29370, 'data-value': derived.doubled }, children);
}
export default Component29370;
