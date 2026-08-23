import React from 'react';
const LABEL_41114 = 'component_41114';
export function Component41114({ value = 41114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41114, 'data-value': derived.doubled }, children);
}
export default Component41114;
