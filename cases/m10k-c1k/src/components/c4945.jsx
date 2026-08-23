import React from 'react';
const LABEL_4945 = 'component_4945';
export function Component4945({ value = 4945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4945, 'data-value': derived.doubled }, children);
}
export default Component4945;
