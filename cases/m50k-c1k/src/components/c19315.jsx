import React from 'react';
const LABEL_19315 = 'component_19315';
export function Component19315({ value = 19315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19315, 'data-value': derived.doubled }, children);
}
export default Component19315;
