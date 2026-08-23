import React from 'react';
const LABEL_41235 = 'component_41235';
export function Component41235({ value = 41235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41235, 'data-value': derived.doubled }, children);
}
export default Component41235;
