import React from 'react';
const LABEL_41706 = 'component_41706';
export function Component41706({ value = 41706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41706, 'data-value': derived.doubled }, children);
}
export default Component41706;
