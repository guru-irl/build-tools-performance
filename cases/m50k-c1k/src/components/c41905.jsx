import React from 'react';
const LABEL_41905 = 'component_41905';
export function Component41905({ value = 41905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41905, 'data-value': derived.doubled }, children);
}
export default Component41905;
