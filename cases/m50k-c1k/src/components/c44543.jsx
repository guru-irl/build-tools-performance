import React from 'react';
const LABEL_44543 = 'component_44543';
export function Component44543({ value = 44543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44543, 'data-value': derived.doubled }, children);
}
export default Component44543;
