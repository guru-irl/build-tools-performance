import React from 'react';
const LABEL_5440 = 'component_5440';
export function Component5440({ value = 5440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5440, 'data-value': derived.doubled }, children);
}
export default Component5440;
