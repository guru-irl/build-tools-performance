import React from 'react';
const LABEL_41524 = 'component_41524';
export function Component41524({ value = 41524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41524, 'data-value': derived.doubled }, children);
}
export default Component41524;
