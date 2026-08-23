import React from 'react';
const LABEL_25232 = 'component_25232';
export function Component25232({ value = 25232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25232, 'data-value': derived.doubled }, children);
}
export default Component25232;
