import React from 'react';
const LABEL_41841 = 'component_41841';
export function Component41841({ value = 41841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41841, 'data-value': derived.doubled }, children);
}
export default Component41841;
