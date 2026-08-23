import React from 'react';
const LABEL_38945 = 'component_38945';
export function Component38945({ value = 38945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38945, 'data-value': derived.doubled }, children);
}
export default Component38945;
