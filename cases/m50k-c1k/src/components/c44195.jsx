import React from 'react';
const LABEL_44195 = 'component_44195';
export function Component44195({ value = 44195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44195, 'data-value': derived.doubled }, children);
}
export default Component44195;
