import React from 'react';
const LABEL_41543 = 'component_41543';
export function Component41543({ value = 41543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41543, 'data-value': derived.doubled }, children);
}
export default Component41543;
