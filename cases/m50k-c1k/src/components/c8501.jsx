import React from 'react';
const LABEL_8501 = 'component_8501';
export function Component8501({ value = 8501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8501, 'data-value': derived.doubled }, children);
}
export default Component8501;
