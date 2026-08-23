import React from 'react';
const LABEL_34998 = 'component_34998';
export function Component34998({ value = 34998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34998, 'data-value': derived.doubled }, children);
}
export default Component34998;
