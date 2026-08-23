import React from 'react';
const LABEL_42259 = 'component_42259';
export function Component42259({ value = 42259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42259, 'data-value': derived.doubled }, children);
}
export default Component42259;
