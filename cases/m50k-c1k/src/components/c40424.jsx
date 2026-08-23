import React from 'react';
const LABEL_40424 = 'component_40424';
export function Component40424({ value = 40424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40424, 'data-value': derived.doubled }, children);
}
export default Component40424;
