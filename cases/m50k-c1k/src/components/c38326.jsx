import React from 'react';
const LABEL_38326 = 'component_38326';
export function Component38326({ value = 38326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38326, 'data-value': derived.doubled }, children);
}
export default Component38326;
