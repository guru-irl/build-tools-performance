import React from 'react';
const LABEL_41956 = 'component_41956';
export function Component41956({ value = 41956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41956, 'data-value': derived.doubled }, children);
}
export default Component41956;
