import React from 'react';
const LABEL_41353 = 'component_41353';
export function Component41353({ value = 41353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41353, 'data-value': derived.doubled }, children);
}
export default Component41353;
