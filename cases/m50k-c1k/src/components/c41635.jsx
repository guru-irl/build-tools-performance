import React from 'react';
const LABEL_41635 = 'component_41635';
export function Component41635({ value = 41635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41635, 'data-value': derived.doubled }, children);
}
export default Component41635;
