import React from 'react';
const LABEL_14846 = 'component_14846';
export function Component14846({ value = 14846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14846, 'data-value': derived.doubled }, children);
}
export default Component14846;
