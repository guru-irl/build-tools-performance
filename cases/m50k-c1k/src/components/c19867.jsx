import React from 'react';
const LABEL_19867 = 'component_19867';
export function Component19867({ value = 19867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19867, 'data-value': derived.doubled }, children);
}
export default Component19867;
