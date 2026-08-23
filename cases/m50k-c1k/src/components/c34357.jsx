import React from 'react';
const LABEL_34357 = 'component_34357';
export function Component34357({ value = 34357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34357, 'data-value': derived.doubled }, children);
}
export default Component34357;
