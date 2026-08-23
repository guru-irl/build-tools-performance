import React from 'react';
const LABEL_44070 = 'component_44070';
export function Component44070({ value = 44070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44070, 'data-value': derived.doubled }, children);
}
export default Component44070;
