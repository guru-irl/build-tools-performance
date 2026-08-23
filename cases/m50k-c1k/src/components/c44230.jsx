import React from 'react';
const LABEL_44230 = 'component_44230';
export function Component44230({ value = 44230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44230, 'data-value': derived.doubled }, children);
}
export default Component44230;
