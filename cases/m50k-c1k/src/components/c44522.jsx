import React from 'react';
const LABEL_44522 = 'component_44522';
export function Component44522({ value = 44522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44522, 'data-value': derived.doubled }, children);
}
export default Component44522;
