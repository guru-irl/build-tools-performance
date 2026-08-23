import React from 'react';
const LABEL_42035 = 'component_42035';
export function Component42035({ value = 42035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42035, 'data-value': derived.doubled }, children);
}
export default Component42035;
