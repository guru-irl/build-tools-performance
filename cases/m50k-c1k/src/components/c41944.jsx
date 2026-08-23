import React from 'react';
const LABEL_41944 = 'component_41944';
export function Component41944({ value = 41944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41944, 'data-value': derived.doubled }, children);
}
export default Component41944;
