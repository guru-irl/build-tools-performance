import React from 'react';
const LABEL_34758 = 'component_34758';
export function Component34758({ value = 34758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34758, 'data-value': derived.doubled }, children);
}
export default Component34758;
