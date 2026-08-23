import React from 'react';
const LABEL_41189 = 'component_41189';
export function Component41189({ value = 41189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41189, 'data-value': derived.doubled }, children);
}
export default Component41189;
