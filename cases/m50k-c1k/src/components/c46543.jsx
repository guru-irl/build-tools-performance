import React from 'react';
const LABEL_46543 = 'component_46543';
export function Component46543({ value = 46543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46543, 'data-value': derived.doubled }, children);
}
export default Component46543;
