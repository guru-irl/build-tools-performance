import React from 'react';
const LABEL_41584 = 'component_41584';
export function Component41584({ value = 41584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41584, 'data-value': derived.doubled }, children);
}
export default Component41584;
